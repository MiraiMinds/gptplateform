<script>
  import Conversations from "../components/dashboard/conversations.svelte";
  import KnowledgeMode from "../components/dashboard/knowledgeMode.svelte";
  import KnowledgeSources from "../components/dashboard/knowledgeSources.svelte";
  import ReportSection from "../components/dashboard/reportSection.svelte";
</script>

<div class="dashboard grow flex divide-x-2">
  <div class="knowledge__source w-full md:w-1/4  p-2">
    <KnowledgeMode />
    <KnowledgeSources />

    <button class="mt-10 bg-green-400 w-full py-3 rounded-md text-white"
      >Add</button
    >
  </div>
  <div class="knowledge__communication w-full grow p-2">
    <Conversations />
  </div>

  <div class="knowledge__report w-full md:w-1/4 p-2">
    <ReportSection />
  </div>
</div>
