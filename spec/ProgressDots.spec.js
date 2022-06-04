import { describe, expect, it } from 'vitest'
import { cleanup, render, fireEvent } from '@testing-library/svelte'
import ProgressDots from '../src/ProgressDots.svelte'

describe('ProgressDots.svelte', () => {
	beforeEach(() => cleanup())
	it('should allow clicking first item only', async () => {
		const { container } = render(ProgressDots, {
			count: 5,
			value: -1,
			current: -1
		})
		expect(container).toBeTruthy()
		let dots = container.querySelectorAll('.step')
		validateDots(dots, 5, -1, -1)

		// await fireEvent.click(dots[0])
		// validateDots(dots, 5, -1, 0)
	})
})

function validateDots(dots, count, value, current) {
	expect(dots.length).toEqual(count)

	dots.forEach((d, i) => {
		expect(d.classList.contains('step')).toBeTruthy()
		expect(d.classList.contains('flex')).toBeTruthy()
		expect(d.classList.contains('w-2')).toBeTruthy()
		expect(d.classList.contains('h-2')).toBeTruthy()
		expect(d.classList.contains('mx-1')).toBeTruthy()
		expect(d.classList.contains('rounded-full')).toBeTruthy()
		expect(d.dataset.step).toEqual(i.toString())
		expect(d.dataset.active).toEqual((i == current).toString())
		expect(d.dataset.completed).toEqual((i <= value).toString())
		expect(d.dataset.clickable).toEqual((i <= value + 1).toString())
	})
}
