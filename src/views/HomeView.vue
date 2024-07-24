<script setup lang="ts">
import LayoutHeader from '@/modules/layout/components/LayoutHeader.vue';
import NavigationLink from '@/modules/components/NavigationLink.vue';
import HeroImageUrl from '@/assets/hero-image.jpg';
</script>

<template>
  <div class="bg-[#F7F9F8]">
    <layout-header></layout-header>
    <div class="flex gap-24 w-full max-w-6xl mx-auto min-h-[calc(100vh-81px)] h-full px-4 py-20">
      <div>
        <h1 class="font-semibold text-[80px] leading-[82px] mb-8">
          The road to the <span class="text-main">depths</span> of the human soul
        </h1>
        <p class="font-medium text-lg leading-6 mb-10">
          We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our
          experienced psychologists.
        </p>
        <navigation-link
          link-style="button"
          to=""
        >
          <div class="flex gap-2 items-center">
            Get Started
            <v-icon
              class="leading-5"
              size="20"
              icon="mdi-arrow-top-right"
            />
          </div>
        </navigation-link>
      </div>
      <div class="relative min-w-[39%] h-full">
        <img
          class="rounded-lg"
          :src="HeroImageUrl"
          alt="hero image"
        >
        <div
          class="flex items-center justify-center absolute bottom-1/2 -left-8 -rotate-12 rounded-lg -translate-y-1/2 h-10 w-10 bg-[#4535AF]"
        >
          <v-icon
            class="text-white rotate-12"
            size="22"
            icon="mdi-help"
          />
        </div>
        <div
          class="flex items-center justify-center absolute top-[10%] -right-8 rotate-12 rounded-lg h-10 w-10 bg-[#FBC75E]"
        >
          <v-icon
            class="text-white"
            size="22"
            icon="mdi-account-group"
          />
        </div>
        <div class="absolute flex gap-4 bottom-[10%] left-[-100px] p-8 rounded-2xl bg-main text-white">
          <v-icon
            class="bg-[white] p-[27px] rounded-2xl w-7 h-7 text-main"
            size="28"
            icon="mdi-check"
          />
          <div class="flex flex-col">
            <span class="text-[#FBFBFB]/50 text-sm mb-1.5">Experienced psychologists</span>
            <span class="font-bold text-2xl leading-7">15,000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
