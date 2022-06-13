import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { neos } from "@neos-project/neos-ui-decorators";
import { TextInput, IconButton } from "@neos-project/react-ui-components";

const defaultOptions = {
    autoFocus: false,
    disabled: true,
    maxlength: null,
    readonly: false
};

const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
};

// const fetchData = slug => fetch("https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&accept-language=en&q="+encodeURI(slug), requestOptions)
//         .then(response => response.json())
//         .then(data => [data[0].lat,data[0].lon]));

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get("i18n"),
    configuration: globalRegistry.get("frontendConfiguration").get("Abte.GeoCoding")
}))

export default class GeoCodingEditor extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        commit: PropTypes.func.isRequired,
        options: PropTypes.object,
        className: PropTypes.string,
        onBlur: PropTypes.func,
        onKeyPress: PropTypes.func,
        onEnterKey: PropTypes.func,

        i18nRegistry: PropTypes.object.isRequired
    };

    static defaultProps = {
        options: {}
    };

    handleData = encodedAddress => {
        fetch("https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&accept-language=en&q="+encodedAddress,requestOptions)
        .then(response => response.json())
        .then(data => data && data[0] && data[0].lat && data[0].lon ? this.props.commit([data[0].lat, data[0].lon]) : '');
    };
    
    hasValue = value => value && value.length === 2;
    geoToString = ([lat, lng]) => `${(lat).toFixed(7)},${(lng).toFixed(7)}`;
    geoToFormatedString = ([lat, lng], f = 2) => `${(lat).toFixed(f)}" N, ${(lng).toFixed(f)}" W`;

    render() {
        const {
            id,
            value,
            className,
            commit,
            options,
            i18nRegistry,
            onEnterKey
        } = this.props;
        // onKeyPress,

        const [lat, lng] = this.hasValue(value) ? value : value;

        // Placeholder text must be unescaped in case html entities were used
        const placeholder = options && options.placeholder &&
              i18nRegistry.translate(unescape(options.placeholder));
        const finalOptions = Object.assign({}, defaultOptions, options);

        const zip = options && options.zip ? options.zip : "";
        const city = options && options.city ? options.city : "";
        const address = options && options.address ? options.address : "";
        const fullAddress = encodeURI(address + ',' + zip + ',' + city);

        // const geodata = fetch("https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&accept-language=en&q="+encodeURI(fullAddress), requestOptions)
        //                 .then(response => response.json())
        //                 .then(data => data[0] ? commit(data[0].lat + ' ; '+ data[0].lon) : 'No address found!');

        return (
            <div style={{ display: "flex" }} className={className}>
                <div style={{ flexGrow: 1 }}>
                    <TextInput
                        id={id}
                        value={value}
                        // onEnterKey={this.handleData(fullAddress)}
                        placeholder={placeholder}
                        readOnly={finalOptions.readonly}
                        disabled={finalOptions.disabled}
                        autoFocus={finalOptions.autoFocus}
                        maxLength={finalOptions.maxlength}
                    />
                </div>
                <div style={{ flexGrow: 0 }}>
                    <IconButton
                        icon="search-location"
                        onClick={() => commit(this.handleData(fullAddress))}
                        //onClick={() => commit(geodata)}
                        style=""
                        hoverStyle="clean"
                        title={i18nRegistry.translate(
                            "Abte.GeoCoding:Main:js.location"
                        )}
                    />
                </div>
            </div>
        );
    }
}
