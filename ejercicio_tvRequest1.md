

<!-- Ejercicio número uno -->
Represents a request to record a television program.

| Element | Description | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| recordTV | Top level | TV program data | Required | |
| &nbsp; &nbsp; date | Date of the program | string | Optional | Format is YYYY-MM-DD HH:MM:SS. Default value is today's date. |
| &nbsp; &nbsp; time | Time the program begins | number | Required | Attributes: **format** has values `24` or `12` for 24 or 12 hour formats. Format is HH:MM, with am or pm afterwards for 12 hour format |
| &nbsp; &nbsp; duration | Length of the program | number | Required | In hours |
| &nbsp; &nbsp; channel | Channel to record | number | Required | |



<!-- Ejercicio número dos -->


Represents a request to record a television program.

| Element | Attribute | Description | Type | Required | Notes |
| --- | --- | --- | --- | --- | --- |
| recordTV | | Top level | TV program data | Required | |
| &nbsp; &nbsp; when | | Date and time when the program starts | | Required |  |
|  | date | Date | string | Optional | Format is YYYY-MM-DD. Default value is today's date. |
|  | time | Time the program begins | string | Required | Format is HH:MM, with am or pm afterwards for 12 hour format |
|  | format | Format for the time: either 12 hour or 24 hour | string | Required| Valid values: `24` or `12`  |
| &nbsp; &nbsp; duration | hours | Length of the program | number | Required | In hours |
| &nbsp; &nbsp; station | channel | Channel to record | number | Required | |