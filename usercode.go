package main

import (
  "context"
  "github.com/corezoid/gitcall-go-runner/gitcall"
  "gopkg.in/h2non/gentleman.v2"
)

type Response struct {
  ResponseCode int
  ResponseBody string
  URL string
}

func usercode(ctx context.Context, data map[string]interface{}) error {

  var respons = Response{}
  cli := gentleman.New()

  cli.URL("https://reqres.in/api/users?page=1")
  cli.Method("GET")
  req := cli.Request()

  res, err := req.Send()

  if err != nil {
	return err;
  }

  respons.ResponseBody = res.String()
  respons.ResponseCode = res.StatusCode
  respons.URL = res.RawRequest.URL.String()

  data["lang"] = "go_lang"
  data["res"] = respons
  return nil
}

func main() {
	gitcall.Handle(gitcall.UsercodeFunc(usercode))
}