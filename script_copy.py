import os
import shutil
import re

src_dir = r'C:\Users\guilh\.gemini\antigravity\brain\8bfc1f65-b73f-4fbd-a936-7a27e6256b22'
dest_dir = r'c:\Users\guilh\OneDrive\Documentos\kit-highlevel\memoria-4k'

# list files in src
for file in os.listdir(src_dir):
    if file.endswith('.png'):
        # match names like disney_magica_1_1776536652250.png
        # but also hero_1776536638394.png
        match = re.match(r'^(.+)_\d{13}\.png$', file)
        if match:
            new_name = match.group(1) + '.png'
            shutil.copy2(os.path.join(src_dir, file), os.path.join(dest_dir, new_name))
            print(f"Copied {file} to {new_name}")

print("done")
