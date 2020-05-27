<template>
  <button v-on:click="passToParent()">Upgrade cost: {{ upgradeCost }}</button>
</template>

<script>
export default {
    name: 'UpgradeButton', 
    data: function() {
        return {
            upgradeCost: 0, 
        }
    },
    props: {
        buttonValue: Number,
        buttonId: Number,
        buttonUpgrade: Number,
        buttonpickLevels: Array
        // perClickUpgrade: Number, 
    },
    mounted: function() {
        this.upgradeCost = this.calculateUpgradeCost(); 
    },
    methods: {
        calculateUpgradeCost: function() {
            if (this.buttonpickLevels[this.buttonId]) {
                console.log("Child: buttlevel1", (this.buttonpickLevels[this.buttonId] * this.buttonUpgrade));
                return (this.buttonpickLevels[this.buttonId] * this.buttonUpgrade);
            } else {
                console.log("Child: buttlevel2", (1 * this.buttonUpgrade));
                return (1 * this.buttonUpgrade);
            }
        },     
        passToParent: function() {
            // console.log("child-val", this.buttonValue);
            // console.log("child-id", this.buttonId);

            this.buttonpickLevels[this.buttonId] = this.buttonpickLevels[this.buttonId] + 1;
            console.log("Child: buttonValue", this.buttonValue);
            const addThisToTotal = this.buttonpickLevels[this.buttonId] * (this.buttonValue / 5);

            this.upgradeCost = this.calculateUpgradeCost(); 
            console.log("Child: addThisToTotal", addThisToTotal);
            this.$emit('whenClicked', parseInt(addThisToTotal), this.buttonpickLevels);
        }, 
   
    }

}
</script>

<style>

</style>