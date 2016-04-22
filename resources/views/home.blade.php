@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <div class="panel panel-default">
        <div class="panel-heading">Dashboard</div>

        <div class="panel-body">
          You are logged in!
        </div>
        <div class="sxd">
          这是苏新道的测试文本.
        </div>
        <button onclick="myApi.app1.hello();">测试点击</button>
      </div>
    </div>
  </div>
</div>

@endsection
