<div class="conversations h-full flex flex-col gap-2">
  <div class="title font-black text-xl">Conversation</div>
  <div
    class="conversation__widget bg-white rounded-md p-2 grow flex flex-col max-h-96 overflow-y-auto border border-2"
  >
    <div class="msg incoming">Hiii</div>
    <div class="msg outgoing">hello</div>
    <div class="msg incoming">Hiii</div>
    <div class="msg outgoing">hello</div>
    <div class="msg incoming">Hiii</div>
  </div>
  <div class="your_message__input border border-2 rounded-md">
    <input
      class="w-full rounded-md h-12 px-2 outline-none"
      type="text"
      placeholder="Type..."
    />
  </div>
</div>

<style lang="scss">
  .msg {
    @apply bg-red-400 my-1 p-1 w-fit rounded-md max-w-[70%];

    &.incoming {
      @apply self-end;
    }
  }
</style>
