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

  <div id="fullpage">
    <div class="section " id="section0">
      <div class="content">
        <h1>fullPage.js</h1>
        <p>Javascript only version</p>
      </div>
    </div>
    <div class="section" id="section1">
      <div class="slide" id="slide1">
        <div class="content">
          <h1>No need for jQuery</h1>
          <p>
            5 Kb gzipped!!
          </p>
          <p>
            Improve the loading time of your site!
          </p>
        </div>
      </div>
      <div class="slide" id="slide2">
        <div class="content">
          <h1>Slides too!</h1>
        </div>
      </div>
      <div class="slide" id="slide2">
        <div class="content">
          <h1>More slides!</h1>
        </div>
      </div>
    </div>
    <div class="section" id="section2">
      <div class="content">
        <h1>Compatible</h1>
        <p>IE 8+ support.</p>
      </div>
    </div>
  </div>

</div>
@endsection
