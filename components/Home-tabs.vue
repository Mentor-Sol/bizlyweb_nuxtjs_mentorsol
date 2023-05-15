<template>
    <ul class="nav home-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="true"
        >
          
          <p>Favorites</p>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="content-tab"
          data-bs-toggle="tab"
          data-bs-target="#content"
          type="button"
          role="tab"
          aria-controls="content"
          aria-selected="false"
        >
        
          <p>Following</p>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="services-tab"
          data-bs-toggle="tab"
          data-bs-target="#services"
          type="button"
          role="tab"
          aria-controls="services"
          aria-selected="false"
        >
         
          <p>Connections</p>
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContentHome">
      <div
        class="tab-pane fade show active"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div className="TabsWrapper">
          <h1>hello</h1>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="content"
        role="tabpanel"
        aria-labelledby="content-tab"
      >
     <h2>hi</h2>
      </div>
      <div
        class="tab-pane fade"
        id="services"
        role="tabpanel"
        aria-labelledby="services-tab"
      >
       <h1>heloooo</h1>
      </div>
    </div>
  </template>
  

