from flask import Flask, url_for
from flask_restful import Api, Resource
from flask_cors import CORS # to allow Cross-Origin Resource Sharing (localhost with different port counts as different origin)
import json

app = Flask(__name__)
CORS(app)
api = Api(app)


with open('recipes.json', 'r') as file:
    recipes = json.load(file)


class Recipes(Resource):
    def get(self):
        for recipe in recipes:
            recipe["image_url"] = url_for('static', filename=f'img/{recipe["image_filename"]}', _external=True)
        return recipes

# Note: requests to /static are handled automatically by flask (it just returns the file)
api.add_resource(Recipes, '/recipes')

if __name__ == '__main__':
    app.run(debug=True)