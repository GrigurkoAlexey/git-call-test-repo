<?php

use GuzzleHttp\Client;

function handle($data) {

    $client = new Client();

    $response = $client->request('GET', 'https://reqres.in/api/users?page=1');
    
    $data['lang'] = 'php';
    $data['res'] = $response->getBody();
    return $data;
}