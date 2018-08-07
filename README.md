# markdown-to-json-script


This script is used to convert product markdown for action configurations into JSON which can be directly used in code.



Example of use:

node index.js *
"\#### ACTION CONFIGURATION: 
* **Process**:
	* Description: Input the process ID, which can be found in the URL after “/build/”.
The ID will have a similar format as: 0048761a-ca19-1637-ae4e-fdd69c7fcc13
	* Example: 0048761a-ca19-1637-ae4e-fdd69c7fcc13
	* Type/Allowed Values: text
	* `required`

* **Trigger name**:
	* Description: Enter the trigger name, as text or a handlebars variable.
	* Example: My New Trigger
	* Type/Allowed Values: text
	* `required`

* **First run**:
	* Description: Enter the date-time when the trigger should run for the first time. May be defined as  either a handle bar or in the ISO format YYYY-MM-DDThh:mm:ss.sTZD
	* Example: {{current-time}} or 1985-10-26T09:00:00Z
	* Type/Allowed Values: date-time
	* `required`

* **Schedule**:
	* Description: Select the repeating cadence for the trigger to run. Options include never, hour, day, weekday, week, month, and year. If blank, the schedule will be set to never repeat.
 	* Example: month
	* Type/Allowed Values: never, hour, day, weekday, week, month, year
	* optional
"\


Will output: 
```
{
  "process": {
    "type": "string",
    "displayName": "Process",
    "description": [
      "Input the process ID, which can be found in the URL after “/build/”.",
      "The ID will have a similar format as: 0048761a-ca19-1637-ae4e-fdd69c7fcc13"
    ],
    "example": "0048761a-ca19-1637-ae4e-fdd69c7fcc13",
    "required": true
  },
  "trigger-name": {
    "type": "string",
    "displayName": "Trigger name",
    "description": [
      "Enter the trigger name, as text or a handlebars variable."
    ],
    "example": "My New Trigger",
    "required": true
  },
  "first-run": {
    "type": "string",
    "displayName": "First run",
    "description": [
      "Enter the date-time when the trigger should run for the first time. May be defined as  either a handle bar or in the ISO format YYYY-MM-DDThh:mm:ss.sTZD"
    ],
    "example": "{{current-time}} or 1985-10-26T09:00:00Z",
    "required": true
  },
  "schedule": {
    "type": "string",
    "displayName": "Schedule",
    "description": [
      "Select the repeating cadence for the trigger to run. Options include never, hour, day, weekday, week, month, and year. If blank, the schedule will be set to never repeat."
    ],
    "example": "month",
    "required": false
  }
}
```
