from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# CSV file path
CSV_FILE = os.path.join(os.path.dirname(__file__), '../data/email.csv')

def initialize_csv():
    """Initialize CSV file with headers if it doesn't exist"""
    if not os.path.exists(CSV_FILE):
        with open(CSV_FILE, 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(['Name', 'Email', 'Registration Date'])

@app.route('/api/register', methods=['POST'])
def register():
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        
        # Validate input
        if not name or not email:
            return jsonify({'error': 'Name and email are required'}), 400
        
        # Basic email validation
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Check if email already exists
        if os.path.exists(CSV_FILE):
            with open(CSV_FILE, 'r', newline='', encoding='utf-8') as file:
                reader = csv.reader(file)
                next(reader, None)  # Skip header
                for row in reader:
                    if len(row) >= 2 and row[1].lower() == email.lower():
                        return jsonify({'error': 'Email already registered'}), 409
        
        # Initialize CSV if it doesn't exist
        initialize_csv()
        
        # Append new registration to CSV
        with open(CSV_FILE, 'a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            registration_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            writer.writerow([name, email, registration_date])
        
        return jsonify({
            'success': True,
            'message': 'Registration successful',
            'data': {
                'name': name,
                'email': email,
                'registration_date': registration_date
            }
        }), 201
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/registrations', methods=['GET'])
def get_registrations():
    """Get all registrations (optional endpoint for admin purposes)"""
    try:
        if not os.path.exists(CSV_FILE):
            return jsonify({'registrations': []})
        
        registrations = []
        with open(CSV_FILE, 'r', newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                registrations.append(row)
        
        return jsonify({'registrations': registrations})
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Flask backend is running'})

if __name__ == '__main__':
    # Initialize CSV file on startup
    initialize_csv()
    print(f"Flask backend starting...")
    print(f"CSV file will be saved as: {os.path.abspath(CSV_FILE)}")
    app.run(debug=True, host='0.0.0.0', port=5000)
