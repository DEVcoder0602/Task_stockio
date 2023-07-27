Warehouse Management System

This is a Warehouse Management System built using React.js and Redux Toolkit. The application allows users to view a list of warehouses and provides features to search, filter, and edit warehouse information. Additionally, it offers the functionality to add custom fields to a warehouse.

Table of Contents
Introduction
Features
Installation
Usage
Technologies Used
Project Structure


Introduction
The Warehouse Management System is a web application that enables users to manage and view details of various warehouses efficiently. It allows users to search for warehouses based on their names, and apply filters to narrow down the results. The application is built using React.js and utilizes Redux Toolkit for state management.

Features
The Warehouse Management System offers the following features:

List of Warehouses: View a list of available warehouses.
Search: Search for warehouses by warehouse name.
Filters:
Filter warehouses based on city.
Filter warehouses based on cluster.
Filter warehouses based on space available limit.
Warehouse Details Page:
Clicking on a warehouse in the list will redirect to the details page.
Edit Functionality:
Edit warehouse information such as cluster, warehouse name, city, space available, and warehouse live status.


Installation
To run the Warehouse Management System on your local machine, follow these steps:

Clone the repository: git clone https://github.com/your-username/warehouse-management.git
Navigate to the project directory: cd warehouse-management
Install dependencies: npm install

Usage
To start the application, run the following command:

npm run dev
The application will be accessible at http://localhost:3000.

Technologies Used
React.js
Redux Toolkit
React Router (for navigation)
HTML5 and CSS (for layout and styling)

Project Structure
The project follows a modular and organized structure to enhance maintainability and scalability. Here's a brief overview of the main directories:

src/components: Contains React components used in the application.
src/store: Contains Redux store, reducers, and actions using Redux Toolkit.
src/pages: Contains the main pages of the application (Listing and WarehouseDetails).
public/: Contains the JSON file (warehouse.json) with warehouse data.

Contributing
If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue. Contributions are always welcome!


