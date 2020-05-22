package main

import (
	"context"
	"net/http"

	"github.com/corezoid/gitcall-go-runner/gitcall"
)

func usercode(ctx context.Context, data map[string]interface{}) error {

	client := http.Client{}
	res, err := client.Get("https://reqres.in/api/users?page=1")
	if err != nil {
		return err
	}
	defer res.Body.Close()

	data["res"] = map[string]interface{}{
		"code": res.StatusCode,
		"body": res.Body.Read
	}
	return nil
}

func main() {
	gitcall.Handle(gitcall.UsercodeFunc(usercode))
}
