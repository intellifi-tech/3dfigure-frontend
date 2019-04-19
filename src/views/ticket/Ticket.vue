<template>
  <VuePerfectScrollbar class="email-content-scroll-area" :settings="settings" ref="mailListPS">
    <transition-group name="list-enter-up" class="email__mails" tag="ul" appear>
      <li
        class="cursor-pointer email__mail-item"
        v-for="(mail, index) in mails"
        :key="String(mailFilter) + String(mail.id)"
        @click.stop="updateOpenMail(mail.id)"
        :style="{transitionDelay: (index * 0.1) + 's'}"
      >
        <mail-item
          :mail="mail"
          :isMailOpen="isMailOpen(mail.id)"
          :isSelected="isMailSelected(mail.id)"
          @addToSelected="addToSelectedMails"
          @removeSelected="removeSelectedMail"
        ></mail-item>
      </li>
    </transition-group>
  </VuePerfectScrollbar>
</template>

<script>
export default {};
</script>

<style>
</style>
