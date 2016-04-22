@extends('layouts.app')

@section('content')
<ul id="menu">
  <li data-menuanchor="section0"><a href="#firstPage">第一屏</a></li>
  <li data-menuanchor="section1"><a href="#secondPage">第二屏</a></li>
  <li data-menuanchor="section2"><a href="#3rdPage">第三屏</a></li>
  <li data-menuanchor="section3"><a href="#4thpage">第四屏</a></li>
</ul>
<div id="fullpage">
  <div class="section" data-anchor="section0" id="section0">
    <div class="content">
      <h1>fullPage.js</h1>
      <p>Javascript only version</p>
    </div>
  </div>
  <div class="section" data-anchor="section1" id="section1">
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
  <div class="section" data-anchor="section2" id="section2">
    <div class="content">
      <h1>Compatible</h1>
      <p>IE 8+ support.</p>
    </div>
  </div>
  <div class="section" data-anchor="section3" id="section2">
    <div class="content">
      <h1>这是我的最后一屏</h1>
    </div>
  </div>
</div>
@endsection
