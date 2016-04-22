@extends('layouts.app')

@section('content')
<div id="fullpage">
  <div class="section " id="section0">
    <div class="content">
      <h1>fullPage.js</h1>
      <p>Javascript only version</p>
    </div>
  </div>
  <div class="section" id="section1">
    <div class="slide" data-anchor="slide1">
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
    <div class="slide" data-anchor="slide2">
      <div class="content">
        <h1>Slides too!</h1>
      </div>
    </div>
    <div class="slide" data-anchor="slide3">
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
@endsection
