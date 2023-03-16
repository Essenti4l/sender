export /*bundle*/ class DomainValue {
	protected skeleton: Array<string>;

	set = (newValues: Partial<this>, opts: { maintainOldValues: boolean } = { maintainOldValues: true }) => {
		try {
			this.skeleton.forEach((property) => {
				const sideValue = opts.maintainOldValues ? this[property] : null;
				const propertyNewValue = newValues[property] ?? sideValue;

				const specialProperty = `set${property.charAt(0).toUpperCase() + property.slice(1)}`;
				const specialSetter = this[specialProperty];

				const response = specialSetter ? specialSetter(propertyNewValue) : (this[property] = propertyNewValue);
				if (typeof response === 'object' && 'status' in response && !response.status) throw response.error;
			});
		} catch (error) {
			return { status: false, error };
		}
	};
}
