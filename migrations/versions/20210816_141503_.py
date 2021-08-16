"""empty message

Revision ID: 3f1ea970f6f5
Revises: a8975fe90871
Create Date: 2021-08-16 14:15:03.022544

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f1ea970f6f5'
down_revision = 'a8975fe90871'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('createdAt', sa.DateTime(), nullable=False))
    op.add_column('comments', sa.Column('updatedAt', sa.DateTime(), nullable=False))
    op.add_column('media', sa.Column('createdAt', sa.DateTime(), nullable=False))
    op.add_column('media', sa.Column('updatedAt', sa.DateTime(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('media', 'updatedAt')
    op.drop_column('media', 'createdAt')
    op.drop_column('comments', 'updatedAt')
    op.drop_column('comments', 'createdAt')
    # ### end Alembic commands ###
