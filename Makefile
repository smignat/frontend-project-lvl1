install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run
	npm link

brain-games:
	node bin/brain-games.js