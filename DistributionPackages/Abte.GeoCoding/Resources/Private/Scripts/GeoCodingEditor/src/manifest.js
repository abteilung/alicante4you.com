import manifest from "@neos-project/neos-ui-extensibility";
import GeoCodingEditor from "./GeoCodingEditor";

manifest("Abte.GeoCoding:GeoCodingEditor", {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");
    editorsRegistry.set("Abte.GeoCoding/GeoCodingEditor", {
        component: GeoCodingEditor
    });
});
