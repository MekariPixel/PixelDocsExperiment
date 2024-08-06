<script setup lang="ts">
import { MpFlex, MpButton, MpText, css } from "@mekari/pixel3";
import { RouterLink } from "#vue-router";

const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);

console.log({ navigation });

const getComponentTabs = computed(() => {
  const components = navigation.value?.find(
    (v) => v._path === "/components"
  )?.children || []

  const childrens = components.find((v) => v._path === '/components/button')
  console.log({ route, components });
  return childrens;
});
</script>

<template>
  <div class="vp-doc container">
    <!-- <div
      v-if="page?.title && page?.description && page._extension === 'md'"
      class="vp-raw"
      :class="
        css({
          height: '218px',
          rounded: 'xl',
          background: '#EDF0F2',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: 'full',
          px: '16',
          textAlign: 'start',
        })
      "
    >
      <div
        :class="
          css({ maxW: '80%', display: 'flex', flexDir: 'column', gap: '2' })
        "
      >
        <MpText size="h1" weight="semiBold"> {{ page?.title }} </MpText>
        <MpText color="gray.600"> {{ page?.description }} </MpText>
      </div>

      <svg
        :class="
          css({ position: 'absolute', right: 0, top: 0, roundedRight: 'xl' })
        "
        width="158"
        height="143"
        viewBox="0 0 158 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <rect x="142.527" width="15.8364" height="15.8889" fill="#4539BC" />
          <rect x="126.69" width="15.8364" height="15.8889" fill="#5E41D8" />
          <rect x="110.854" width="15.8364" height="15.8889" fill="#4539BC" />
          <rect x="95.0176" width="15.8364" height="15.8889" fill="#9176D7" />
          <rect x="79.1816" width="15.8364" height="15.8889" fill="#533FC9" />
          <rect x="63.3447" width="15.8364" height="15.8889" fill="#6D48E5" />
          <rect x="47.5088" width="15.8364" height="15.8889" fill="#6D48E5" />
          <rect x="31.6729" width="15.8364" height="15.8889" fill="#9176D7" />
          <rect
            x="126.69"
            y="15.8889"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="110.854"
            y="15.8889"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="95.0186"
            y="15.8889"
            width="15.8364"
            height="15.8889"
            fill="#5E41D8"
          />
          <rect
            x="79.1816"
            y="15.8889"
            width="15.8364"
            height="15.8889"
            fill="#9176D7"
          />
          <rect
            x="63.3447"
            y="15.8889"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect y="15.8889" width="15.8364" height="15.8889" fill="#9176D7" />
          <rect
            x="142.526"
            y="31.7777"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="126.69"
            y="31.7777"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="110.854"
            y="31.7777"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="95.0176"
            y="31.7777"
            width="15.8364"
            height="15.8889"
            fill="#5E41D8"
          />
          <rect
            x="79.1816"
            y="31.7777"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="63.3447"
            y="31.7777"
            width="15.8364"
            height="15.8889"
            fill="#6D48E5"
          />
          <rect
            x="47.5088"
            y="31.7777"
            width="15.8364"
            height="15.8889"
            fill="#9176D7"
          />
          <rect
            x="142.527"
            y="47.6665"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="126.69"
            y="47.6665"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="110.854"
            y="47.6665"
            width="15.8364"
            height="15.8889"
            fill="#5E41D8"
          />
          <rect
            x="95.0176"
            y="47.6665"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="79.1816"
            y="47.6665"
            width="15.8364"
            height="15.8889"
            fill="#6D48E5"
          />
          <rect
            x="31.6729"
            y="47.6665"
            width="15.8364"
            height="15.8889"
            fill="#6D48E5"
          />
          <rect
            x="142.526"
            y="79.4445"
            width="15.8364"
            height="15.8889"
            fill="#6D48E5"
          />
          <rect
            x="126.69"
            y="79.4445"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="110.854"
            y="79.4445"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="95.0176"
            y="79.4445"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="63.3447"
            y="79.4445"
            width="15.8364"
            height="15.8889"
            fill="#9176D7"
          />
          <rect
            x="142.527"
            y="95.3334"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="126.69"
            y="95.3334"
            width="15.8364"
            height="15.8889"
            fill="#5E41D8"
          />
          <rect
            x="142.526"
            y="111.222"
            width="15.8364"
            height="15.8889"
            fill="#4539BC"
          />
          <rect
            x="110.854"
            y="111.222"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="63.3447"
            y="111.222"
            width="15.8364"
            height="15.8889"
            fill="#6D48E5"
          />
          <rect
            x="110.854"
            y="127.111"
            width="15.8364"
            height="15.8889"
            fill="#6D48E5"
          />
          <rect
            x="47.5088"
            y="127.111"
            width="15.8364"
            height="15.8889"
            fill="#9176D7"
          />
          <rect
            x="126.69"
            y="63.5555"
            width="15.8364"
            height="15.8889"
            fill="#533FC9"
          />
          <rect
            x="15.8359"
            y="63.5555"
            width="15.8364"
            height="15.8889"
            fill="#9176D7"
          />
        </g>
      </svg>
    </div>

    {{ getComponentTabs }}

    <MpFlex v-if="page?._extension === 'md'" class="vp-raw" gap="8" py="8">
      <MpButton :as="RouterLink" to="/components/button/usage">
        Usage
      </MpButton>
      <MpButton
        :as="RouterLink"
        to="/components/button/behavior"
        variant="ghost"
      >
        Behavior
      </MpButton>
      <MpButton
        :as="RouterLink"
        to="/components/button/formatting"
        variant="ghost"
      >
        Formating
      </MpButton>
    </MpFlex> -->

    <ContentDoc />
  </div>
</template>
