<?php

require 'vendor/autoload.php';


function handle($data) {
    $dbconn = pg_connect($data.url);
    if (!$dbconn) {
        $data['err'] = pg_last_error();
        return $data;
    }

    $res = pg_query($dbconn, $data.query);
    if(!$res) {
        $data['err'] = pg_last_error();
        return $data;
    }

    $data['res'] = $res;
    return $data;
}