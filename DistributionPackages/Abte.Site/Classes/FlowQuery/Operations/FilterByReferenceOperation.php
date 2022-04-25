<?php
namespace Abte\Site\FlowQuery\Operations;

use Neos\Eel\FlowQuery\FlowQueryException;
use Neos\Eel\FlowQuery\Operations\AbstractOperation;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Eel\FlowQuery\FlowQuery;

/**
 * EEL filterByReference() operation to filter nodes by a reference, like categories.
 *
 * Use it like this:
 *
 *    ${q(node).children().filterByReference(myCategoryNode, 'myCategoryReferencesField')}
 */
class FilterByReferenceOperation extends AbstractOperation {

    /**
     * {@inheritdoc}
     *
     * @var string
     */
    protected static $shortName = 'filterByReference';

    /**
     * {@inheritdoc}
     *
     * @var int
     */
    protected static $priority = 100;

    /**
     * {@inheritdoc}
     *
     * We can only handle NeosCR Nodes.
     *
     * @param mixed $context
     *
     * @return bool
     */
    public function canEvaluate($context): bool
    {
        return (isset($context[0]) && ($context[0] instanceof NodeInterface));
    }


    /**
     * {@inheritdoc}
     *
     * @param FlowQuery $oFlowQuery the FlowQuery object
     * @param array     $aArguments the arguments for this operation
     *
     * @return void
     * @throws FlowQueryException
     */
    public function evaluate( FlowQuery $oFlowQuery, array $aArguments ) {

        // Throw exception if the property name is missing
        if (!isset($aArguments[1]) || empty($aArguments[1])) {
            throw new FlowQueryException('filterByReference() needs a property name by which the context should be filtered',
                1550054406);
        }

        // Get nodes
        $aNodes = $oFlowQuery->getContext();

        // Just set all nodes to context if there are no references
        if (!isset($aArguments[0]) || empty($aArguments[0])) {
            $oFlowQuery->setContext($aNodes);
        }
        else {

            // Get references and property name
            $aReferences = $aArguments[0];
            $sPropertyName = $aArguments[1];

            // Check reference(s) and get filtered nodes
            if ( is_array($aReferences) ) {
                $aFilteredNodes = [];
                /** @var NodeInterface $oReference */
                foreach ( $aReferences as $oReference ) {
                    $aFilteredNodes = array_merge( $aFilteredNodes, $this->_getFilteredNodes($aNodes, $oReference, $sPropertyName) );
                }
            }
            elseif ( is_object($aReferences) && $aReferences instanceof NodeInterface ) {
                /** @var NodeInterface $aReferences */
                $aFilteredNodes = $this->_getFilteredNodes( $aNodes, $aReferences, $sPropertyName );
            }
            else {
                throw new FlowQueryException('filterByReference() needs a correct type of references (array or NodeInterface)',
                    1550099901);
            }

            // Set filtered nodes to context
            $oFlowQuery->setContext($aFilteredNodes);
        }
    }


    /**
     * Returns filtered nodes
     *
     * @param array $aNodes
     * @param NodeInterface $oReference
     * @param string $sPropertyName
     * @return array
     */
    private function _getFilteredNodes( $aNodes, $oReference, $sPropertyName ) {
        return array_values(array_filter($aNodes,
            function (NodeInterface $oNode) use ($oReference, $sPropertyName) {
                $oOriginalReferences = $oNode->getProperty($sPropertyName);
                return is_array($oOriginalReferences) && in_array($oReference, $oOriginalReferences);
            }
        ));
    }
}
