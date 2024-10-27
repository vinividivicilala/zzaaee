import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const baseTheme: CustomThemeConfig = {
	name: 'base',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter`,
		'--theme-font-family-heading': `Inter`,
		'--theme-font-color-base': 'var(--color-secondary-500)',
		'--theme-font-color-dark': 'var(--color-tertiary-500)',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': 'var(--color-tertiary-500)',
		// =~= Theme Colors  =~=
		// primary | #00ffff
		'--color-primary-50': '217 255 255', // #d9ffff
		'--color-primary-100': '204 255 255', // #ccffff
		'--color-primary-200': '191 255 255', // #bfffff
		'--color-primary-300': '153 255 255', // #99ffff
		'--color-primary-400': '77 255 255', // #4dffff
		'--color-primary-500': '0 255 255', // #00ffff
		'--color-primary-600': '0 230 230', // #00e6e6
		'--color-primary-700': '0 191 191', // #00bfbf
		'--color-primary-800': '0 153 153', // #009999
		'--color-primary-900': '0 125 125', // #007d7d
		// secondary | #FF0095
		'--color-secondary-50': '255 217 239', // #ffd9ef
		'--color-secondary-100': '255 204 234', // #ffccea
		'--color-secondary-200': '255 191 229', // #ffbfe5
		'--color-secondary-300': '255 153 213', // #ff99d5
		'--color-secondary-400': '255 77 181', // #ff4db5
		'--color-secondary-500': '255 0 149', // #FF0095
		'--color-secondary-600': '230 0 134', // #e60086
		'--color-secondary-700': '191 0 112', // #bf0070
		'--color-secondary-800': '153 0 89', // #990059
		'--color-secondary-900': '125 0 73', // #7d0049
		// tertiary | #d2d4da
		'--color-tertiary-50': '248 249 249', // #f8f9f9
		'--color-tertiary-100': '246 246 248', // #f6f6f8
		'--color-tertiary-200': '244 244 246', // #f4f4f6
		'--color-tertiary-300': '237 238 240', // #edeef0
		'--color-tertiary-400': '224 225 229', // #e0e1e5
		'--color-tertiary-500': '210 212 218', // #d2d4da
		'--color-tertiary-600': '189 191 196', // #bdbfc4
		'--color-tertiary-700': '158 159 164', // #9e9fa4
		'--color-tertiary-800': '126 127 131', // #7e7f83
		'--color-tertiary-900': '103 104 107', // #67686b
		// success | #9BE826
		'--color-success-50': '240 252 222', // #f0fcde
		'--color-success-100': '235 250 212', // #ebfad4
		'--color-success-200': '230 249 201', // #e6f9c9
		'--color-success-300': '215 246 168', // #d7f6a8
		'--color-success-400': '185 239 103', // #b9ef67
		'--color-success-500': '155 232 38', // #9BE826
		'--color-success-600': '140 209 34', // #8cd122
		'--color-success-700': '116 174 29', // #74ae1d
		'--color-success-800': '93 139 23', // #5d8b17
		'--color-success-900': '76 114 19', // #4c7213
		// warning | #F6BC0E
		'--color-warning-50': '254 245 219', // #fef5db
		'--color-warning-100': '253 242 207', // #fdf2cf
		'--color-warning-200': '253 238 195', // #fdeec3
		'--color-warning-300': '251 228 159', // #fbe49f
		'--color-warning-400': '249 208 86', // #f9d056
		'--color-warning-500': '246 188 14', // #F6BC0E
		'--color-warning-600': '221 169 13', // #dda90d
		'--color-warning-700': '185 141 11', // #b98d0b
		'--color-warning-800': '148 113 8', // #947108
		'--color-warning-900': '121 92 7', // #795c07
		// error | #FFA8A8
		'--color-error-50': '255 242 242', // #fff2f2
		'--color-error-100': '255 238 238', // #ffeeee
		'--color-error-200': '255 233 233', // #ffe9e9
		'--color-error-300': '255 220 220', // #ffdcdc
		'--color-error-400': '255 194 194', // #ffc2c2
		'--color-error-500': '255 168 168', // #FFA8A8
		'--color-error-600': '230 151 151', // #e69797
		'--color-error-700': '191 126 126', // #bf7e7e
		'--color-error-800': '153 101 101', // #996565
		'--color-error-900': '125 82 82', // #7d5252
		// surface | #1f263c
		'--color-surface-50': '221 222 226', // #dddee2
		'--color-surface-100': '210 212 216', // #d2d4d8
		'--color-surface-200': '199 201 206', // #c7c9ce
		'--color-surface-300': '165 168 177', // #a5a8b1
		'--color-surface-400': '98 103 119', // #626777
		'--color-surface-500': '41 51 80', // #293350
		'--color-surface-600': '28 34 54', // #1c2236
		'--color-surface-700': '23 29 45', // #171d2d
		'--color-surface-800': '19 23 36', // #131724
		'--color-surface-900': '15 19 29' // #0f131d
	}
};
