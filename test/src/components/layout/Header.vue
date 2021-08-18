<template>
<div >
  <b-navbar type="dark" variant="dark" >
    <b-navbar-nav>
      <b-nav-item  href="/">Home</b-nav-item>      
      <b-nav-item href="/About">About</b-nav-item>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="User" >
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>

</template>
<script>
    export default {
        name : "Header",
    }
</script>