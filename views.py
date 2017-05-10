# -*- coding: utf-8 -*-
from __future__ import unicode_literals


import json

import urllib2

from django.http import JsonResponse

# Create your views here.


def elevation(request):
    json_data = {"status": "bad_request"}
    if 'url_req' in request.GET and request.GET['url_req']:
        url = request.GET['url_req']
        json_data = json.load(urllib2.urlopen(url))
    return JsonResponse(json_data)
