import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex'

export default {
  watch: {
    createdElement: {
      handler () {
        const { created } = this.createdElement
        if (created) {
          const { id } = this.createdElement
          if (id) {
            this.goToItem({ meta: { id } })
          }
          this.setCreatedItemStatus([
            false,
            null,
          ])
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapState('task', ['createdElement']),
    ...mapGetters('task', ['itemCreated']),
    buttons () {
      return [
        {
          name: 'goToItem',
          icon: 'forward',
          color: 'blue',
          text: this.$t('global.details.title'),
        },
      ]
    },
    itemFields () {
      return this.fieldsInfo.filter(field => field.details !== false)
    },
  },
  methods: {
    ...mapMutations('task', [
      'showItemDetailsDialog',
      'setCreatedItemStatus',
      'setCurrentItem',
    ]),
    ...mapActions('task', ['getItemDetails']),
    goToItem (item, index) {
      this.setCurrentItem({ id: item.meta.id, index })
      this.getItemDetails([item.meta.id]).then(() => {
        this.showItemDetailsDialog()
      })
    },
  },
}
