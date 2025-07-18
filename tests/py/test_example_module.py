# SPDX-License-Identifier: Apache-2.0
import subprocess


def test_main_runs():
    result = subprocess.run(['python', 'modules/example_module/main.py'], capture_output=True, text=True)
    assert result.returncode == 0
    assert 'Example module python logic' in result.stdout
