const Ajv = require("ajv");

//JSON Schema
let thingSchema = {
    "type": "object",
    "additionalProperties": false,
    "required": ["body", "status", "type", "date"],
    "properties": {
        "body": {
            "type": 'string'
        },
        "status": {
            "type": 'boolean'
        },
        "type": {
            "type": 'number'
        },
        "date": {
            "type": 'string'
        },
        "edit": {
            "type": 'number'
        }

    }
};

const ajv = new Ajv();
const vaildate = ajv.compile(thingSchema);

module.exports = vaildate;