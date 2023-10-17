# <img style="width: 32px; height: 32px; padding-top: 8px;" src="https://s3.amazonaws.com/gupy5/production/companies/417/career/35254/images/2021-11-05_19-02_logo.png" /> UOLKut PB Challenge

## :pencil2: Description

It's a alternative application, like the old "orkut", with auth forms, and a profile dashboard.

## :computer: How to run

After you clone the repository and do a `npm i` command to install all the required packages, it's only have a few more steps to run the application correctly.

In this project we used a <strong>fake rest api</strong> made with `json-server`, and the only command you need to run to server is `npm run server`, it'll execute a custom script, make sure to run this command before start the project, if you don't do this, the project <strong>will not run correctly</strong>.

After this you can run a simple `npm run dev` in another terminal and the project will execute normally.

## :iphone: Main Techs

<div style="display: inline-block">
   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
   <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

## :fireworks: Extra Techs

- React hook form
- React Hot Toast
- Json Server
- Axios

## :page_facing_up: Pages

- [x] FormPage - The pagination in this page it's made with 'Outlet' component from the `react-router-dom`, so when you change the "url", the only page part that changes it's the form
- [x] Profile Page
- [x] Edit Profile Page

## :file_folder: Project Structure

```
├─── public
├─── src
│   ├─── api: Contains only the `db.json` file, the entire api runs by script
│   ├─── components
│   ├─── assets
│   ├─── config
│   ├─── context
│   ├─── hooks
│   ├─── interfaces
│   ├─── styles: Contains files like global styles and global theme
│   ├─── templates: Contains the pages files
│   └─── utils
```

## :sparkles: Extra Features

- Login and register forms with real authentication
- Dynamic Data in profile with Context API and Session Storage
- Responsiveness to almost all common screen sizes.
- Error handling server-side, like services offline, or wrong credentials in login, using pop up, made with `react-hot-toast`.

## :boom: Problems Faced

We tried to keep a clean html structure, with the minimum div's or span's possible, and in components we tried to avoid to use JS logic to change the layout, keeping the layout changes more in the `styled-components` files, alternating css rules with custom props.

Pages like the main profile page were more hard than we expected, do the grid management without add unnecessary html structure and manipulate only with css was a really good challenge.
