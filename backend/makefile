.PHONY: install setup run

install:
	pip install -r requirements.txt

setup:
	python3 -m venv .venv
	.venv/bin/activate && pip install -r requirements.txt

run:
	 uvicorn main:app --reload

clean:
	rm -rf .venv
