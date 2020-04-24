#!/bin/sh

go mod init usercode;
go mod vendor;
go build -o usercode .