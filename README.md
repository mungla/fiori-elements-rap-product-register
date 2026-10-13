# Product Registration: Fiori Elements on ABAP RAP

A SAPUI5 Fiori elements List Report and Object Page for registering products
with the Uganda Revenue Authority (URA) EFRIS system. Users maintain product
data in the app, the product is transmitted to the EFRIS API, and the
response is stored and shown back on the record.

## How it works
1. The user opens the List Report and filters the product registrations.
2. **Fetch Candidates** asks for company code, plant, material type, material and
   created-on date, and loads matching materials as draft candidates (status P).
3. The user can also create or edit a registration (draft-enabled).
4. The user selects a registration and clicks **Post to EFRIS**, which triggers an
   action on the RAP business object.
5. The action transmits the registration data to the EFRIS API.
6. The API response (status, result code, message, date and time) is saved on
   the record and shown in the list and on the Object Page, with status
   criticality colours.

## Features
- List Report with filtering and an Object Page for each product registration
- Draft handling: create and edit a registration before saving it
- **Fetch Candidates** action with input parameters, loading materials as draft candidates
- **Post to EFRIS** action that sends the selected registration to the EFRIS API
- Post and Edit buttons enabled or disabled per row through dynamic action control
- API response stored on the record: status, result code, message, date and time
- Status shown with criticality colours, so successful and failed postings are easy to tell apart
- Error handling: if the API returns an error, the user sees the message, corrects
  the data and clicks **Post to EFRIS** again

## Screenshots

**List report with status criticality and filters (mock data):**
![List report](docs/screenshots/01-list-report.png)

**Fetch Candidates action parameters:**
![Fetch Candidates dialog](docs/screenshots/02-fetch-candidates-dialog.png)

**A fetched candidate loaded into draft (from the live system; client data redacted):**
![Candidate loaded into draft](docs/screenshots/03-candidate-loaded-into-draft.png)

**Object Page with the registration details and API response fields:**
![Object Page](docs/screenshots/04-object-page.png)

**Selecting a row enables the Post to EFRIS action:**
![Row selected, Post to EFRIS enabled](docs/screenshots/05-row-selected-post-action.png)

## Tech stack
- ABAP RAP: CDS view entities, draft-enabled business object with managed behavior, OData V4 - UI service binding
- Integration: outbound call to the EFRIS API, with the response written back to the business object
- SAPUI5 1.120 with Fiori elements (V4)
- SAP Fiori tools in VS Code, Node.js 24 LTS

## Run it locally with mock data
No SAP system is needed. The app runs against a mock server with five dummy products.

```bash
npm install
npx fiori run --config ./ui5-mock.yaml
```

Then open <http://localhost:8080/test/flp.html#urapproductreg-tile>.
If that config fails, try `npx fiori run --config ./ui5-local.yaml`.

**Mock limits:** the mock serves the list, filters, statuses and Object Page from
`webapp/localService/mainService/data/UraProductReg.json`. The custom actions
(Fetch Candidates, Post to EFRIS) and the draft actions appear in the UI but are
not simulated, because they need the ABAP backend and the EFRIS API.

## Backend
The OData V4 service is exposed from an S/4HANA system through a service binding on a
RAP business object. The backend source (CDS, behavior definition and implementation)
is not part of this repo, and the system URLs in the YAML files are placeholders.
