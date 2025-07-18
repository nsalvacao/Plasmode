# SPDX-License-Identifier: Apache-2.0
"""Tests for the example Python module."""

import subprocess


def test_main_runs():
    """Module script should execute without errors."""
    result = subprocess.run(
        ['python', 'modules/example_module/main.py'],
        capture_output=True,
        text=True,
        check=False,
    )
    assert result.returncode == 0
    assert 'Example module python logic' in result.stdout
