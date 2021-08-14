"""added comment, follower, media, spot tables

Revision ID: 0b34bd03b9d5
Revises: 0fc833613c84
Create Date: 2021-08-14 17:27:14.108001

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0b34bd03b9d5'
down_revision = '0fc833613c84'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('latitude', sa.Float(), nullable=False),
    sa.Column('longitude', sa.Float(), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=False),
    sa.Column('imageUrl', sa.String(length=500), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('followers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('followerId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['followerId'], ['users.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('media',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=True),
    sa.Column('mediaUrl', sa.String(length=500), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('spotId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['spotId'], ['spots.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=500), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('mediaId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['mediaId'], ['media.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('media')
    op.drop_table('followers')
    op.drop_table('spots')
    # ### end Alembic commands ###
