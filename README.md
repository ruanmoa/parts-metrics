# Parts Metrics - DigiKey Service API

A Node.js-based service for processing electronic components using the DigiKey API. 
This project reads component data from an Excel file, performs API queries to retrieve detailed information, and generates a new Excel file with the results.

---

## Features

- **Read Excel Files**: Load an Excel file containing a component list and the quantity for each component.
- **DigiKey API Integration**: Query component details via DigiKey's API.
- **Excel File Generation**: Export API query results to a new `.xlsx` file.
- **Error Handling**: Provides feedback for invalid files or failed API requests.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ruanmoa/part-track.git
   cd part-track

2. Install dependencies:
   
   ```bash
   npm install

3. Set up environment variables:
Create a `.env` file in the project root and configure the following:

   ```bash
   CLIENT_ID=your_digikey_client_id
   CLIENT_SECRET=your_digikey_client_secret

## Usage

1. Start the Server:

   ```bash
   npm start
   
2. Send a POST Request:
Use tools like Postman or Insomnia to send a POST request to the `/components` endpoint.
  * URL: `http://localhost:3000/components`
  * Body (form-data):
      * file: Atach your Excel file (e.g., `components.xlsx`).
   
3. Output:
After processing, the server generates a new Excel file with the API query results in the `/output/` directory`.

## Project Structure

  ```bash
  PartTrack/
  ├── data/                  # Directory for input .xlsx files
      └── exampleComponents.xlsx
  ├── src/
  │   ├── controllers/
  │   │   └── componentController.js
  │   ├── routes/
  │   │   └── componentRoutes.js
  │   ├── services/
  │   │   └── digikeyService.js
  │   ├── utils/
  │   │   ├── excelExporter.js
  │   │   ├── extractPrices.js
  │   │   ├── inputReader.js
  │   │   └── processData.js
  │   └── app.js
  ├── output/               # Directory for generated Excel files
  ├── upload/               # Directory is used to temporarily store files uploaded to the server before processing.
  ├── .env                  # Environment variables
  ├── .gitignore            # Git ignored files
  ├── package.json          # Project metadata and dependencies
  └── README.md             # Project documentation
  ```

## Dependencies
* **express**: Web framework for building the API.
* **axios**: For making HTTP requests to the DigiKey API.
* **dotenv**: For managing environment variables.
* **multer**: For handling file uploads.
* **xlsx**: For reading and writing Excel files.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For questions or feedback, feel free to reach out:
* Email: ruan.moa@gmail.com
* GitHub: [@ruanmoa](https://github.com/ruanmoa)
