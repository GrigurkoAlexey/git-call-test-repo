package main

import (
	"context"

	"github.com/corezoid/gitcall-go-runner/gitcall"
)

func usercode(_ context.Context, data map[string]interface{}) error {

	data["body"] = "Hello Rebuild!"

	return nil
}

func main() {
	gitcall.Handle(usercode)
}
