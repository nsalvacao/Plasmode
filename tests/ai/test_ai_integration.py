# SPDX-License-Identifier: Apache-2.0
import requests
from unittest import mock
import pytest


def test_local_ai_success():
    with mock.patch('requests.post') as post:
        post.return_value.status_code = 200
        post.return_value.json.return_value = {'answer': 'hi'}
        resp = requests.post('http://localhost:5000/ai', json={'prompt': 'hi'})
        assert resp.json()['answer'] == 'hi'


def test_cloud_ai_error():
    with mock.patch('requests.post', side_effect=requests.exceptions.RequestException):
        with pytest.raises(requests.exceptions.RequestException):
            requests.post('https://api.example.com/ai', json={'prompt': 'hi'})
