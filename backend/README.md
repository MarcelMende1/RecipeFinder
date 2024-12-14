# Flask Backend for Recipe Application
This repository contains the backend of a recipe application, built with Flask. It provides an API to manage recipes, user accounts, and shopping lists.


## Setup
1. **Enter the `/backend` directory:**
    ```bash
    cd backend
    ```

2. **Create an isolated Python environment and install the required packages:**

    1. **Using the [venv](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#creating-a-virtual-environment) module, set up a virtual environment with an isolated version of Python:**
        ```bash
        python3 -m venv env # set up virtual environment called `env`
        ```

    2. **Activate the virtual environment by [`source`](https://linuxcommand.org/lc3_man_pages/sourceh.html)-ing the activation file (you will have to do this for every new terminal window):**
        - on Linux/macOS:
            ```bash
            source env/bin/activate
            ``` 
        - on Windows:
            ```bash
            env\Scripts\activate
            ```
        Note: some IDEs might recognize the virtual environment and give you the option to select it as the project's interpreter.
   
    3. **(Optional) Verify that you are using the virtual environment:**
        - on Linux/macOS:
            ```bash
            which python # confirm python path => /path/to/project/backend/env/bin/python
            ```
        - on Windows:
            ```bash
            where python # => C:\path\to\project\backend\env\Scripts\python.exe
            ```
   
    4. **Install the project's dependencies within the virtual environment:**
        
         ```bash
         pip install --upgrade pip # upgrade pip
         pip install -U -r requirements.txt # install (or update) dependencies listed in requirements.txt
         ```


## Usage
To start the server, simply run the following command:
```bash
python3 main.py
```
This will run the Flask backend with `debug=True` on http://127.0.0.1:5000 (flask default). To stop the server, press `Ctrl+C` in the terminal.

### Debug Mode and Production Settings
- The `debug=True setting is for development purposes only and should not be used in production.
- To disable debug mode or customize server settings, modify `app.run()` inside `main.py`. For example:
    ```bash
    app.run(debug=False, port=8080)
    ```
This will run the server without debug mode on port 8080.
For more information, refer to the [Flask documentation](https://flask.palletsprojects.com/en/stable/).
