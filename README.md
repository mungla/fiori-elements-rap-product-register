# Product Registration: Fiori Elements on ABAP RAP

A SAPUI5 Fiori elements List Report and Object Page for registering products
with the Uganda Revenue Authority (URA) EFRIS system. Users maintain product
data in the app, the product is transmitted to the EFRIS API, and the
response is stored and shown back on the record.

## How it works
1. The user creates or edits a product registration in the Fiori app (draft-enabled).
2. The RAP business object sends the registration data to the EFRIS API.
3. The API response (status, result code, message, date and time) is saved
   on the record and displayed in the list and on the Object Page, with
   status criticality colours.

## Tech stack
- ABAP RAP: CDS view entities, draft-enabled business object, OData V4 - UI service binding
- Integration: outbound call to the EFRIS API, with the response written back to the business object
- SAPUI5 1.120 with Fiori elements (V4)
- SAP Fiori tools in VS Code, Node.js 24 LTS
- Deployment to an ABAP system as a BSP application with `fiori deploy`
- Fiori Launchpad integration (semantic object, target mapping, tile)

## How it works
1. The user creates or edits a product registration in the Fiori app (draft-enabled).
2. The user clicks the **Post to EFRIS** button, which triggers an action on the
   RAP business object.
3. The action transmits the registration data to the EFRIS API.
4. The API response (status, result code, message, date and time) is saved on
   the record and shown in the list and on the Object Page, with status
   criticality colours.