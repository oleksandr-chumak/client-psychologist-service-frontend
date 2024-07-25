<script setup lang="ts">
import LayoutHeader from '@/modules/layout/components/LayoutHeader.vue';
import NavigationLink from '@/modules/common/components/NavigationLink.vue';
import HeroImageUrl from '@/assets/hero-image.jpg';
</script>

<template>
  <div class="tw-bg-[#F7F9F8]">
    <layout-header></layout-header>
    <div class="tw-flex tw-gap-24 tw-w-full tw-max-w-6xl tw-mx-auto tw-min-h-[calc(100vh-81px)] tw-h-full tw-px-4 tw-py-20">
      <div>
        <h1 class="tw-font-semibold tw-text-[80px] tw-leading-[82px] tw-mb-8">
          The road to the <span class="tw-text-main">depths</span> of the human soul
        </h1>
        <p class="tw-font-medium tw-text-lg tw-leading-6 tw-mb-10">
          We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our
          experienced psychologists.
        </p>
        <navigation-link
          link-style="button"
          to=""
        >
          <div class="tw-flex tw-gap-2 tw-items-center">
            Get Started
            <v-icon
              class="tw-leading-5"
              size="20"
              icon="mdi-arrow-top-right"
            />
          </div>
        </navigation-link>
      </div>
      <div class="tw-relative tw-min-w-[39%] tw-h-full">
        <img
          class="tw-rounded-lg"
          :src="HeroImageUrl"
          alt="hero image"
        >
        <div
          class="tw-flex tw-items-center tw-justify-center tw-absolute tw-bottom-1/2 tw--left-8 tw--rotate-12 tw-rounded-lg tw--translate-y-1/2 tw-h-10 tw-w-10 tw-bg-[#4535AF]"
        >
          <v-icon
            class="tw-text-white tw-rotate-12"
            size="22"
            icon="mdi-help"
          />
        </div>
        <div
          class="tw-flex tw-items-center tw-justify-center tw-absolute tw-top-[10%] tw--right-8 tw-rotate-12 tw-rounded-lg tw-h-10 tw-w-10 tw-bg-[#FBC75E]"
        >
          <v-icon
            class="tw-text-white"
            size="22"
            icon="mdi-account-group"
          />
        </div>
        <div class="tw-absolute tw-flex tw-gap-4 tw-bottom-[10%] tw-left-[-100px] tw-p-8 tw-rounded-2xl tw-bg-main tw-text-white">
          <v-icon
            class="tw-bg-[white] tw-p-[27px] tw-rounded-2xl tw-w-7 tw-h-7 tw-text-main"
            size="28"
            icon="mdi-check"
          />
          <div class="tw-flex tw-flex-col">
            <span class="tw-text-[#FBFBFB]/50 tw-text-sm tw-mb-1.5">Experienced psychologists</span>
            <span class="tw-font-bold tw-text-2xl tw-leading-7">15,000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
