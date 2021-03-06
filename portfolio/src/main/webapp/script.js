// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomMovie() {
  const movies =
      ['Sixth sense', 'Batman', 'Spiderman', 'Test'];

  // Pick a random greeting.
  const greeting = movies[Math.floor(Math.random() * movies.length)];

  // Add it to the page.
  const movieContainer = document.getElementById('movie-container');
  movieContainer.innerText = greeting;
}
