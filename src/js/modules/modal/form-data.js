export class FormDataManager {
    constructor() {
        this.data = {
            vehicleTypes: [],
            firstName: '',
            lastName: '',
        };
    }

    updateVehicleTypes(types) {
        this.data.vehicleTypes = types;
    }

    updateContactInfo(firstName, lastName) {
        this.data.firstName = firstName;
        this.data.lastName = lastName;
    }

    getData() {
        return { ...this.data };
    }

    reset() {
        this.data = {
            vehicleTypes: [],
            firstName: '',
            lastName: '',
        };
    }
}