<script setup>
import CategoryAside from './components/CategoryAside.vue';
import TouristSpotNav from './components/TouristSpotNav.vue';
import CategorySection from './components/CategorySection.vue'; 
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 " data-aos="fade-up">
                <CategoryAside></CategoryAside>
            </div>
            <div class="col-md-9">
                <TouristSpotNav></TouristSpotNav>
                <CategorySection></CategorySection>
            </div>

        </div>
    </div> 
</template>

