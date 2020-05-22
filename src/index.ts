export class NumberFormat {
	readonly #locale: string;
	readonly #options: Intl.NumberFormatOptions;

	private constructor(locale: string, options?: Intl.NumberFormatOptions) {
		this.#locale = locale;
		this.#options = options || {};
	}

	public static make(locale: string, options?: Intl.NumberFormatOptions): NumberFormat {
		return new NumberFormat(locale, options);
	}

	public format(value: number): string {
		return new Intl.NumberFormat(this.#locale).format(value);
	}

	public formatAsCurrency(value: number, currency: string): string {
		return new Intl.NumberFormat(this.#locale, {
			...this.#options,
			...{ style: "currency", currency },
		}).format(value);
	}

	public formatAsUnit(value: number, unit: string): string {
		return new Intl.NumberFormat(this.#locale, {
			...this.#options,
			...{ style: "unit", unit },
		}).format(value);
	}
}
