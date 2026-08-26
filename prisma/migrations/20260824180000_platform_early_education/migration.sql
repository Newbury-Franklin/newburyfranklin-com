-- Rename enum value: no rows reference "coffee" yet (admin import/document
-- upload features aren't built), so a plain rename is safe here.
ALTER TYPE "Platform" RENAME VALUE 'coffee' TO 'earlyeducation';
