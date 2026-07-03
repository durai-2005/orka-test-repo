import pytest
import os

def test_index_contains_shop_name():
    path = 'index.html'
    assert os.path.exists(path), "index.html should exist"
    with open(path, 'r') as f:
        content = f.read()
        assert "Bean There Coffee" in content