import json
import os
from google.oauth2 import id_token
from google.auth.transport import requests
request = requests.Request()

def hello(event, context):
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

    # Use this code if you don't use the http event with the LAMBDA-PROXY
    # integration
    """
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """

def whoami(event, context):
    body = {
        "username": "alk272"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

def get_players(event, context):
    # token would come from the header
    try:  
        token = event['headers']['Authorization']
        id_info = id_token.verify_firebase_token(token, request)
        userid = id_info['sub']

        # assume if user id_info exists then its good?

        filename = os.path.join('test_data.json')
        with open(filename) as f:
            data = json.load(f)
        
        head, tail = os.path.split(event['path'])
        if tail == 'players': 
            body = {
                'slate': None,
                'players': data
            }
        else: 
            body = {
                'slate': int(tail),
                'players': [x for x in data if x['slate'] == int(tail)]
            }     

        response = {
            "statusCode": 200,
            "body": json.dumps(body)
        }
    except: 
        body = {}     

        response = {
            "statusCode": 401,
            "body": json.dumps(body)
        }

    return response

    