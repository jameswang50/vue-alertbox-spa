<template>
  <div style="margin:20px;">
    <h1 style="text-align:center">Vue.js SPA</h1>
    <task
      :prefix="prefix"
      :path="path"
      :page-title="pageTitle"
      :fields-info="fieldsInfo"
      :details-title="detailsTitle"
      :delete-mode="deleteMode"
      :refresh-button="refreshButton"
      :export-button="exportButton"
      :field-filters="fieldFilters"
      :main-filter="mainFilter"
      :create-mode="createMode"
      :edit-mode="editMode"
      :edit-button="editButton"
      :select-many-mode="selectManyMode"
      :update-many-mode="updateManyMode"
      :remove-many-mode="removeManyMode"
    >
    </task>
    <alert-box></alert-box>
  </div>
</template>

<script>
import Task from '@/utils/task/components/Task.vue'
import AlertBox from '@/utils/app/components/AlertBox.vue'

export default {
  data () {
    return {
      prefix: 'tasks',
      path: 'tasks',
      pageTitle: 'crud.tasks',
      detailsTitle: '',
      deleteMode: 'soft',
      refreshButton: true,
      exportButton: false,
      fieldFilters: true,
      mainFilter: true,
      createMode: true,
      editMode: true,
      editButton: true,
      selectManyMode: true,
      updateManyMode: true,
      removeManyMode: true,
    }
  },
  created () {
    this.detailsTitle = this.$t('detailsTitle')
  },
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false,
        },
        {
          type: 'input',
          column: 'name',
          text: this.$t('fields.name'),
          name: 'name',
          multiedit: false,
        },
        {
          type: 'textarea',
          column: 'description',
          text: this.$t('fields.description'),
          name: 'description',
          required: false,
        },
      ]
    },
  },
  components: {
    Task,
    AlertBox,
  },
  i18n: {
    messages: {
      en: {
        detailsTitle: 'Task',
        fields: {
          id: 'Id',
          name: 'Name',
          description: 'Description',
        },
      },
    },
  },
}

</script>
