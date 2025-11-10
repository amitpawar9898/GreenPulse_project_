GreenPulse - Tree Cover & GDI Prediction System
GreenPulse is an AI-powered data analysis and visualization project that monitors, analyzes,
and predicts the Green Deficit Index (GDI) - a measure of environmental imbalance due to
tree cover loss. It integrates machine learning, environmental datasets, and dashboards for
visual insight and prediction.
-------------------------------------------------
Project Structure
-------------------------------------------------
- preprocessing.ipynb : Data preprocessing
- ml.ipynb : Machine Learning model training
- visualization.ipynb : Visualization and analytics
- decision_tree_model.pkl : Trained model
- feature_engineered_greenpulse.csv : Cleaned dataset
- subnational_1_tree_cover_loss.csv : State-level data
- subnational_2_tree_cover_loss.csv : District-level data
- index.html : Dashboard
- styles.css / script.js : Frontend design
- IND.xlsx : Supporting dataset
-------------------------------------------------
Installation & Setup
-------------------------------------------------
1. Install Python 3.10 or later
2. Create Virtual Environment:
 python -m venv env
 env\Scripts\activate (Windows)
 source env/bin/activate (Mac/Linux)
3. Install requirements:
 pip install -r requirements.txt
requirements.txt:
pandas
numpy
scikit-learn
matplotlib
seaborn
openpyxl
joblib
flask
-------------------------------------------------
Running the Project
-------------------------------------------------
1. Data Preprocessing: jupyter notebook preprocessing.ipynb
2. Train Model: jupyter notebook ml.ipynb
3. Visualize: jupyter notebook visualization.ipynb
-------------------------------------------------
Run the Dashboard
-------------------------------------------------
Option 1: Double-click index.html
Option 2: python -m http.server 8000
 Open http://localhost:8000
-------------------------------------------------
Flask Backend (Optional)
-------------------------------------------------
Create app.py and add API for GDI prediction.
from flask import Flask, request, jsonify
import pickle, numpy as np
app = Flask(__name__)
model = pickle.load(open("decision_tree_model - Copy.pkl", "rb"))
@app.route('/predict', methods=['POST'])
def predict():
 data = request.json
 features = np.array([[data['threshold'], data['area_ha'],
 data['extent_2000_ha'], data['extent_2010_ha'],
 data['gain_2000_2020_ha'], data['total_loss']]])
 prediction = model.predict(features)[0]
 return jsonify({'predicted_GDI': float(prediction)})
if __name__ == '__main__':
 app.run(debug=True)
-------------------------------------------------
GitHub Upload
-------------------------------------------------
git init
git add .
git commit -m "Initial commit - GreenPulse"
git branch -M main
git remote add origin https://github.com/<username>/GreenPulse.git
git push -u origin main
-------------------------------------------------
Author
-------------------------------------------------
Amit Pawar
AI & Data Science Project for Environmental Monitoring (2025)
